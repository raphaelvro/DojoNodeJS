import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';



const readFile = (fileName) => {
    return fs.readFileSync(fileName, 'utf8')
}

const getOutputPath = () => { 
    const fullFilePath = fileURLToPath(import.meta.url)
    const i = path.dirname(fullFilePath)
    return path.join(path.resolve(i,'../','output'))
}

const generateDefaultOutputFilePath = (fileName, fileNumber, fileExtension) => {
    const rawFileName = path.parse(fileName)
    const inputFileName = rawFileName ? rawFileName.name : fileName
    const outputFileName = `${inputFileName}${fileNumber ? fileNumber : ''}.${fileExtension}`

    return path.join(getOutputPath(), outputFileName)
}

const saveFileText = (fileName, fileNumber, fileContent) => {
    const fileNameWithPath = generateDefaultOutputFilePath(fileName, fileNumber, 'txt')

    fs.writeFileSync(fileNameWithPath, fileContent)
}

const totalFilesInFolder = (folderPath = getOutputPath()) => {
    const result = fs.readdirSync(folderPath)

    return result ? result.length : 1
}

const saveFile = async (fileContent, finalPath) => {
    const onlyPath = path.dirname(finalPath)
    
    if (!fs.existsSync(onlyPath)){
        await fs.promises.mkdir(onlyPath, { recursive: true })
    }
   
    fs.writeFileSync(finalPath, fileContent)
}

const saveJSONFile = async (objeto, finalPath) => {
    await saveFile(JSON.stringify(objeto, null, 4), finalPath)
}

export { readFile, saveFile, totalFilesInFolder, generateDefaultOutputFilePath, saveFileText, saveJSONFile }