const valid = (user, email, password, cf_password) => {
    if (!user || !email || !password || !cf_password)
        return 'Hãy nhập đủ các trường!'
}

export default valid