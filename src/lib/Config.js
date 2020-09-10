const Config = () => {
    if (process.env.NODE_ENV === 'production') {
        console.log(process.env.REACT_APP_PROD_WELCOME_PAGE_API_ENDPOINT)
        return {
            welcomePageEndpoint: process.env.REACT_APP_PROD_WELCOME_PAGE_API_ENDPOINT
        }
    }
    return {
        welcomePageEndpoint: process.env.REACT_APP_DEV_WELCOME_PAGE_API_ENDPOINT
    }
}

export default Config