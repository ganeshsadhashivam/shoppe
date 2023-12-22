const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/userModel");
const sendEmail = require("../utils/email");
const ErrorHandler = require("../utils/errorHandler");

const sendToken = require("../utils/jwt");
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, avatar } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar,
  });

  // const token = user.getJwtToken();

  // res.status(201).json({
  //   success: true,
  //   user,
  //   token,
  // });

  sendToken(user, 201, res);
});

//Login User - /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  //finding the user database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  if (!(await user.isValidPassword(password))) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 201, res);
});

//Logout - /api/v1/logout
exports.logoutUser = (req, res, next) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .json({
      success: true,
      message: "Loggedout",
    });
};

//forget password api/v1/password/forget
exports.forgetPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  console.log("hi");
  if (!user) {
    console.log("not user");
    return next(new ErrorHandler("User Not Found with this Email", 404));
  }
  console.log("3");
  const resetToken = user.getResetToken();
  console.log("4");
  await user.save({ validateBeforeSave: false });
  console.log("5");
  //create reset url
  const resetUrl = `${req.protocol}//${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;
  console.log("6");
  const message = `Your Password Reset Url Is as Follows \n\n ${resetUrl} \n\n If You Have not requested this Email,Then Ignore it.`;

  try {
    sendEmail({
      email: user.email,
      subject: "Shoppe Password Recovery",
      message,
    });
    console.log("7");
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save({ validateBeforeSave: false });
    console.log("8");
    return next(new ErrorHandler(error.message), 500);
  }
});
