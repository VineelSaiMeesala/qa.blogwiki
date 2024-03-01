const configurations ={
    Environment:"QA",
    Version: 'V89.MJ-06.01.24-Dev',
    testkey:'2R3Gu1DsdrjUdk5KyaTO'
}
function config (passKey){
    return(
        configurations[passKey]
    )
}
export default config;