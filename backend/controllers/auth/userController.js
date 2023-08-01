const bcrypt = require('bcrypt')
const usersTable = require('../../models/userModel')

const register = async (req, res) => {
	const { first_name, last_name, email, password, about_us } = req.body;
	const checkIfUserExist = await usersTable.findOne({ email: email })
	try {
		// ✅ User sudah terdaftar ??
		if ( checkIfUserExist ) {
			return res.status(200).json({ success: false, message : "user is already exist"})
		} else {
			// ✅ Hash password dan store ke db
			const hashpw = await bcrypt.hash(password, 10)
			const user = new usersTable({ first_name, last_name, email, password: hashpw, about_us })
			user.save()
			return res.status(200).json({ success: true, message : "user is created"})
		}
	} catch ( e ) {
		// ✅ Handle error
		return res.status(404).json({ errors : "errors"})
	}
}

const login = async (req, res ) => {
	const { email , password } = req.body;
    let existingUser;
    try{
    	// ✅ Email user ada di db ??
     	existingUser = await usersTable.findOne({email})
    } catch( e ) {
     	console.log("Error");
    }
    // ✅ User tidak ada di db ??
    if(existingUser == null){
        return res.status(404).json( { status: false, message : "User is not found" } )
    }
    // ✅ Cek password yang sudah di hash 
    const isPasswordCorrect = await bcrypt.compare( password, existingUser.password );
    if( isPasswordCorrect ) {
    	// ✅ Sukses login ??
    	return res.status(200).json( { status: true, message: "Succesfully login!", user: existingUser })
    }
    // ✅ Gagal login ??
    return res.status(400).json( { status: false, message: "Incorrect Password!" })
    
}
module.exports = { register, login };