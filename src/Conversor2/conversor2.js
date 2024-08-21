
/*
const mapKeys = { 
    0:'', 1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII', 8:'VIII', 9:'IX', 10:'X', 20:'XX'}

const convert = (number) => {
    const listValues = String(number).split('').reverse()

    const result = []
    let unit = ''
    for(const target of listValues){
        const finalResponse = mapKeys[target + unit]
        result.push(finalResponse || '')
        unit += '0'
    }

}

export { convert }*/

const mapKeys = { 
    0:'', 1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII', 8:'VIII', 9:'IX', 10:'X', 20:'XX'}

const convert = (number) => {
    const listValues = String(number).split('').reverse()

    const unit = listValues[0] ? mapKeys[listValues[0]] : ''
    const ten = listValues[1] ? mapKeys[listValues[1] + '0'] : ''
    const hundred = listValues[2] ? mapKeys[listValues[2] + '00'] : ''

    return [hundred, ten, unit].join('')
}

export { convert }

/*
 for (const [key, value] of Object.entries(mapKeys)) {
        key
        value
      }

    return result.reverse().join('')*/
