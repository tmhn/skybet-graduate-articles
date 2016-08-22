# SkyBet Graduate Articles

---
title: How to Run
---

To make changes you need to edit two items:
- Firstly open `config.toml`. This file handles the routes for the app. 

```toml
contributorPages = [
	"/contributors/",
	"/contributors/tom-hanson/",
	"/contributors/firstname-surname/"
]
```
Enter a new entry following the above convention ensuring a comma at the end of the previous entry, similar to JSON standards.

The code tree below shows the layout of the project. 

```
skybet-graduate-articles
│   ...   
└─── pages
    │   404.md
    │   _template.jsx
    │   index.md    
    │
    ├─── contributors
    │   │    
    │   │─── tom-hanson
    │   │   │ index.md    
    |	|
    │   │─── TEST-DIRECTORY
    │   │   │ index.md    
    |	|        
    │   │   _template.jsx
    │   │   index.md   
    │   │   ...
    │
    └─── docs
    │   ...
```

1. Create a directory, similar to the **TEST-DIRECTORY** with lowercase *firstname-surname*
2. Within that directory, create an `index.md` file - this is your homepage file where you will list all your links for Medium.

3. Edit the `index.md` to have the following beginning of file:

```markdown
	---
	title: Firstname Surname
	---

	...
```

4. Restart the `gatsby develop` command and refresh your browser to see the addition of your directory within Contributors.

5. Do the classic `git add .` & `git commit -m "..."` & `git push` to your own GitHub repo.

6. Create a PR with brief description of change.