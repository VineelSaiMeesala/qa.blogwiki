const configurations ={
    Environment:"QA",
    Version: 'V89.MJ-07.01.24-QA',
}
function config (passKey){
    return(
        configurations[passKey]
    )
}
export default config;