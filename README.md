#Scripted JSBin

This is the ScriptEd customized version of JSBin


The goal of this project is to create a customized version of JSBin to be used by students enrolled in ScriptEd classes.  Effort should be made to make any changes as configurable / isolated as possible, to allow as much code as possible to be shared with the [main version JSBin](https://github.com/jsbin/jsbin)

This customized version will authenticated users against the Scripted platform user database.



##Features

###Complete

* Nothing yet :)

###TODO
* GitHub integration
	* If merge conflicts, offer 3 options : 
		1. request merge - contacts teacher who can ssh in and fix any problems
		1. forced push of local version
		1. overwrite local version
* "Publish" button to publish all bins to *http://students.scripted.org/:username*
* Named bins with descriptions and "publish" flag
* Force line numbers all times (or make showing line numbers default)
* Remove "Share" button
* Replace "Bins" dropdown with Dropdown / Menu to select home page or particular project
* Allow teacher to post code samples for easy forking/inclusion in student projects
* Playground area where no work is saved
* Allow drag and drop to move / resize editor sections
* Better HTML / CSS / Javascript help and reference
* Move live preview button so it is more obvious
* Disable JS auto-run, remove checkbox (?)
* Change power icon to scripted logo
* Disallow use if not logged in (portal feature instead?)
* Remove create accounts / link github buttons
* Fix issue with prompts inside loops not working
* Image upload
* Clear console button
* Feedback system for teachers (similar to github inline commenting)
* Show proper line numbers in console errors
* Better color coding / syntax highlighting
* Public / private bins.  Public bins are included in site publish, private are for student only
* Auto clear console on every run
* Better error messages for runtime / syntax errors
* Integrated quizzes (portal feature instead?)
* Automated submission/grading system
* Remove versioning system, only one version of any bin
* Disable capture of Cmd+1, Cmd+2 etc (default tab switch shortcut in firefox)
* Disable auto save (option in settings)
* Simple debugging tools
* Remote disable student keyboard / push code to all students
* Integrated messaging (portal feature?)
* Fix bugs with disappearing bins (Edwin Fuquen)
* Better bin URLs, based on bin name
* Improved code casting
* JSFiddle style collaborative editing

##Branches

* **master** - Production ready release code to be deployed to ScriptEd server.
* **scripted/upstream** - Branch intended for submission back to remy/jsbin.  Changes to make JSBin more configurable, fix bugs, and add features useful for the main version running on JSBin.com
* **scripted/dev**- Active development branch
* **scripted/feature/:feature-name** - Feature branches (e.g. scripted/feature/github-export)
* **scripted/release/:release-name** - Releases (e.g. scripted/release/v0.1.0)
	
Please see [this link](http://nvie.com/posts/a-successful-git-branching-model/) for an explanation of branching strategy.

	
	