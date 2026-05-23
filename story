app.post("/story", upload.single("media"),

 async(req,res)=>{

   const story = new Story({

      userId:req.body.userId,

      media:req.file.path,

      expiresAt:Date.now()+86400000

   });

   await story.save();

   res.json(story);

});
