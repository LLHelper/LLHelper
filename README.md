# LLHelper
A helper for Lovelive SIF.

## How to Contribute
We use Phabricator to review code. You'll need to register an account at our [Phabricator Site](https://repo.lcm.im) to submit your code and request review.

Currently we are still accepting Pull Requests from Github, but soon we'll migrate to Phabricator.

### Using Phabricator: Install
*For Mac Users*: 

First, install arcanist. Make sure you have git and php installed (macOS comes with these typically). You can specify the install location, or you can just go through the following:

```
cd
mkdir arc
cd arc
git clone https://github.com/phacility/libphutil.git
git clone https://github.com/phacility/arcanist.git
```

Then edit the bash profile:
```
vim ~/.bash_profile
```

Add a line at the end of the file (in other words, add an export path):
```
export PATH="$PATH:~/arc/arcanist/bin/"
```

Reload the bash profile. You should be able to verify that arcanist has been installed by typing `which arc` and see a path.

*For Windows Users*:

You need to have a shell environment. We suggest that you use git bash, so you'll have git as well.

Follow the step for Mac users to install arcanist. Then, you need to install php:

- Download the latest stable PHP binary release from: http://windows.php.net/download/. When this document was last updated, this was PHP 5.4.6, but newer versions should also work. The "VC9 x86 Non Thread Safe" build should work correctly. (Other versions newer than PHP 5.3 should work, and thread-safe versions should also work.)

- Unzip the PHP directory.

- Copy php.ini-development to php.ini in that same directory.

- Open php.ini and locate the line ;extension=php_curl.dll. Remove the ; to activate this extension. Locate the line ; extension_dir = "ext" and change it to extension_dir = "C:\PHP\ext", where C:\PHP is the directory where you installed PHP.

- Verify that things work by running php -i from your commandline and looking for curl in the output.

After that, you need to configure the editor. We suggest you use vim or Notepad++ for `arc` prompts.

#### Vim
```
arc set-config editor "\"C:\Program Files (x86)\Git\share\vim\vim73\vim.exe\""
```

#### Notepad++
```
arc set-config editor "\"C:\Program Files (x86)\Notepad++\notepad++.exe\" -multiInst -nosession"
```

#### Sublime Text
```
arc set-config editor "\"C:\Program Files\Sublime Text 2\sublime_text.exe\" -w -n"
```

For more information, see [Phabricator Guide](https://secure.phabricator.com/book/phabricator/article/arcanist_quick_start/).

### Using Phabricator: Configure the repo

The following should be done automatically. If not, create the `.arcconfig` manually:

You'll then need to clone this repo. Cd' into the working directory of the repo, and create a file called `.arcconfig`. Inside the file, you specify the repo's address:
```
{
  "phabricator.uri" : "https://repo.lcm.im/"
}
```

Save the file and exit.

You'll then need to register an account on https://repo.lcm.im. You can link your github account. It'll take a day or two for us to approve your request.

With the account confirmed, run `arc install-certificate` and follow the instruction to get certificate.

### Using Phabricator: Coding

You can code like normal. If you want to sync remote to local, you can run `git pull` and `rebase` your commit on master.

After you complete your feature, `commit` locally and run `arc diff` to submit a revision for review.

#### Caveats!!

NOTE!!! If you want to make changes to your local commit, do NOT run `git commit` after making the change. Instead, run `git commit --amend` to `amend` the changes and run `arc diff` again to update your revision on the remote. IF YOU COMMIT LOCALLY AND RUN `arc diff`, IT WILL CREATE A NEW REVISION WITH NEW CHANGESETS.

#### Land

After you code is approved, run `arc land` to submit your code to github.

#### Stacking diffs (Advanced Users)

Sometimes review can be slow, and you want to add more features. It's fine: you can add a feature based on your working copy. Just `git commit` again to create a stacking tree, then `arc diff` the new changes. You can then edit the revision on the web page and point your old diff as a dependency.

Do NOT create a branch for every feature. Using stacking commit will solves lots of merging nightmares.

## TODO: Add Chinese Docs
