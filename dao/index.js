class AQI{
    constructor(Schema, name, val) {
        this.Schema = Schema;
        this.name = name;
        this.val = val;
    }

    // selectByCondition(){
    //     this['Schema'].find({this['name'], this['val']}, function (err, result) {
    //         if(err){
    //             return {err: err};
    //         }
    //         return {result: result};
    //     })
    // }
}

module.exports = AQI;