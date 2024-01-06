const configurations ={
    Environment:"DEV",
    Version: 'V49.MJ-06.01.24-Dev',
}
function config (passKey){
    return(
        configurations[passKey]
    )
}
export default config;