# Authentication Setup Guide

This project is set up to use **[Passport.js](https://www.passportjs.org/)** for authentication. We have provided the structure, but you need to choose and implement your specific strategy (e.g., Google, GitHub, Email/Password).

## How to Add an Auth Strategy

### 1. Install the Strategy
Search for the strategy you want on npm.
- For Google: `passport-google-oauth20`
- For GitHub: `passport-github2`
- For Email/Password: `passport-local`

```bash
cd backend
npm install passport-google-oauth20
npm install --save-dev @types/passport-google-oauth20
```

### 2. Configure Passport
Edit `backend/src/config/passport.ts`:

```typescript
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Inside setupPassport():
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    // Find or create user in database
    // See backend/src/config/passport.ts for where to put this logic
    return done(null, user);
  }
));
```

### 3. Add Routes
Edit `backend/src/routes/auth.routes.ts`:

```typescript
// Start login
authRoutes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback
authRoutes.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    // You might want to set a cookie or JWT here.
    res.redirect('/');
  }
);
```

### 4. Update Frontend
Update `frontend/src/context/AuthContext.tsx` to handle the user state and login redirection.
