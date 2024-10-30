import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './auth';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: 'session-secret-key', // Change this to a secure key
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
console.log('Google Client ID:', process.env.GOOGLE_CLIENT_ID);

 // Route to start the authentication process
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Callback route for Google to redirect to
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home or to a protected route.
        res.redirect('/profile');
    }
);

app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.json(req.user); // Send user profile as JSON
});

// Home route
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Login with Google</a>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});