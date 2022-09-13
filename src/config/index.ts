const auth = {
    secret: String(process.env.JWT_SECRET),
    expires: String(process.env.JWT_EXPIRES_IN)
}

export default auth;