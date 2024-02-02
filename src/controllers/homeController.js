
import db from '../models/index';

let getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
    //findAll(): search all data in table user
    
    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    });
    } catch (e) {
        console.log(e);
    }
    
}



module.exports = {
    getHomepage: getHomepage,
}