const secret = {
    mongo: {
        mongoURI: 'mongodb://admin:admin@ds135747.mlab.com:35747/evo'
    },
    facebook: {
        clientID: '138792716807189',
        clientSecret: '4056229421f28ac8c6c73b54c8424cc2',
        callbackURL: 'http://localhost:3000/api/facebook/callback'
    }
};

module.exports = secret;