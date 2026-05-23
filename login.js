const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.post("/register", async (req, res) => {

    const hashedPassword =
      await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();

    res.json({
        message: "Account Created"
    });
});

app.post("/login", async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });

    if(!user){
        return res.status(400).json({
            message: "User not found"
        });
    }

    const valid = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if(!valid){
        return res.status(400).json({
            message: "Wrong Password"
        });
    }

    const token = jwt.sign(
        { id: user._id },
        "CICADA_SECRET"
    );

    res.json({
        token,
        username: user.username
    });
});
