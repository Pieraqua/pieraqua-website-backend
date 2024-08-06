export function getAllFolders() : Array<string>
{
    var fs = require('fs')

    return fs.readdirSync(__dirname + '/posts')
}
    
export function getAllFiles(folder : string)
{
    var fs = require('fs')

    return fs.readdirSync(__dirname + '/posts/' + folder)

}