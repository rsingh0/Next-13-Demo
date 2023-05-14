Learn about React Server Components vs Client Components
All of these JSX files are RSC unless we use 

'use client'

on top of JSX to convert them to client component

Adv of RSC:

- Load faster - Don't have to wait for javascript to load
- Smaller Client Bundle Size
- SEO Friendly
- Access to resources the client can't access
- Hide sensitive data from the client
- More secure against XSS attacks
- Improved developer expirence

DisAdv of RSC:

- Not as Interactive
- No Component State, WE CANNOT USE 'useState' HOOK
- No Component lifecycle methods, so WE CANNOT USE 'useEffect hook