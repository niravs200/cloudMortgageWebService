/**
 * UserManagmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    addUser: function(req,res)
    {
        var name = req.param("name");
        var email = req.param("email");
        var password = req.param("password");
        var address = req.param("address");
        var phoneNumber = req.param("phoneNumber");
        var companyName = req.param("companyName");
        
        UserManagment.create({Name:name,Email:email,Password:password,Address:address,Phone_Number:phoneNumber,Company_Name:companyName,Status:"Waiting for employee response"})
            .exec(function(err){
                if(err)
                {
                    var errCode = err.code;
                    if(errCode=="E_UNIQUE")
                    {
                        res.send({error:"User already exist",status:"fail"});
                    }
                    else
                    {
                        res.send({error:message,status:"fail"});
                    }           
                }
                else
                {
                    res.send({status:"Success"});
                } 
            });
    },    

    login: function(req,res)
    {
        var email = req.param("email");
        var password = req.param("password");
        
        UserManagment.findOne({Email:email})
            .exec(function(err,user)
            {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    if(!user)
                    {
                        res.send({status:"unauthentic",error:"Email-Password combination does not exist"})
                    }
                    else
                    {
                        if(password==user.Password)
                        {
                            res.send({status:"authentic",error:"Email-Password combination does not exist"})
                        }
                        else{
                            res.send({status:"unauthentic"})
                        }
                    }
                }
                
            })
    },

    status:function(req,res)
    {
        var email = req.param("email");
        UserManagment.findOne({Email:email})
            .exec(function(err,user)
            {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    if(!user)
                    {
                        res.send({status:"unauthentic",error:"Email-Password combination does not exist"})
                    }   
                    res.send(user)
                }
            })
    },

    verify:function(req,res)
    {
        var name = req.param("name");
        var email = req.param("email");
        var address = req.param("address");
        var phoneNumber = req.param("phoneNumber");
        var companyName = req.param("companyName");
        var id = req.param("id");

        UserManagment.findOne({id:id})
            .exec(function(err,user)
            {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    if(name==user.Name && email==user.Email && address==user.Address && phoneNumber==user.Phone_Number && companyName==user.Company_Name)
                    {
                        UserManagment.update({id:id})
                        .set()
                    }
                }

            })
    }


};

