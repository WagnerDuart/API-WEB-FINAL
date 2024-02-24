const User = require("../models/User")

exports.registerUser = async (req, res) => {
    const bcrypt = require("bcrypt")

    const {name, email, password, confirmpassword}  = req.body;


    //validação
  if(!name) {
    return res.status(422).json({msg: 'O nome é obrigatório!'})
  }

  if(!email) {
    return res.status(422).json({msg: 'O email é obrigatório!'})
  }

  if(!password) {
    return res.status(422).json({msg: 'A senha é obrigatório!'})
  
  }

  if(!confirmpassword) {
    return res.status(422).json({msg: 'Confirme a senha, é obrigatório!'})
  
  }
  
  if(password !== confirmpassword) {
    return res.status(422).json({msg: 'As senhas não conferem!'})
  }

  // check if user exists

  const userExists = await User.findOne({email: email})

  if(userExists) {
    return res.status(422).json({msg: 'Por favor, utilize outro e-mail!'})
  }

  
  //Create PassWord

  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  // Create User

  const user = new User({
    name,
    email,
    password: passwordHash,
  })

  try {
    
    await user.save()

    res.status(201).json({msg: 'Usúario criado com sucesso!'})
    
  } catch (error) {
    console.log(error);

    res.status(500).json({msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'})
  }
}  

exports.authenticLogin = async (req, res) => {
    const jwt = require("jsonwebtoken")
    const bcrypt = require("bcrypt")
    const cors = require("cors")

    const {email, password} = req.body

  //valildations
  
    if(!email) {
      return res.status(422).json({msg: 'O email é obrigatório!'})
    }

    if(!password) {
      return res.status(422).json({msg: 'A senha é obrigatório!'})
    }

    // check if user exists

    const user = await User.findOne({email: email})

    if(!user) {
      return res.status(404).json({msg: 'Usúario não encontrado!'})
    }

    // Check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
      return res.status(422).json({msg: 'Senha inválida!'})
    }

    try {

      const secret = process.env.SECRET
  
      const token = jwt.sign({
        id: user._id
      }, secret)
  
      res.status(200).json({msg: 'Autenticação realizada com sucesso', token})
      
    } catch (error) {
      console.log(error);
  
      res.status(500).json({msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'})
    }
}


// function checkToken(req,res,next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]

//   if(!token){
//     return res.status(401).json({msg: 'Acesso negado!'})
//   }

//   try {

//     const secret = process.env.SECRET

//     jwt.verify(token, secret)

//     next()

//   } catch (error) {
//     res.status(400).json({msg: 'Token invalido!'})
//   }
// }
