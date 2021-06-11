var db = require('../config/db');


module.exports.categoryList = async result => {
    await db.query("SELECT * FROM category", (err, res) => {
       try {
        if (err) {
            result(null, err);
            return;
          }
          result(null, res);
       }
       catch(err) {
        result(null, err);
        return;
       }
    });
};

module.exports.catgadd = async (catgData,result) => {
    await sql.query(`INSERT INTO category SET ?`,catgData,(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, {...catgData });
    });
};

module.exports.catg = async (id,result) => {
    await db.query(`SELECT * FROM category where sno=${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if(res.length) {
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};