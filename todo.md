# UI
- [x] Home page
    - [x] Tags on articles should also be links
    - [x] How do i specify color for each tag
        - [x] In the type definition?
- [x] Article page
- [ ] Search posts by category
- [/] Add new posts using markdown
    - [/] Block site if not admin
        - Login page will get password
        if matches db, redirect to /add
        else throw error
        - Add page verifies jwt is set
        if it is, pass to website
        else back to login
    - [/] Submit query
