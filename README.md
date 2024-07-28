# Contributing to Portfolio

To contribute to this project, I'd like you to please follow the steps outlined below to raise a pull request with your changes. I will review the changes and merge them if they are appropriate and relevant.

## Forking a repository

<p>In the top-right corner of the page, click <code>Fork</code> </p>

<img width="700" alt="image" src="https://github.com/user-attachments/assets/064bf2ee-dd96-4c13-b4d4-71309d6ad4d7">

## Cloning a fork

<p>You've successfully forked the portfolio repository, but so far, it only exists on GitHub. To be able to work on the project, you will need to clone it to your computer.</p>

1. Click on <code> <> Code </code>
2. Now click on the copy icon

![image](https://github.com/user-attachments/assets/f535ffac-336a-4d7f-9335-c3544d85b25e)

4. Open the terminal where you want to keep the project repo.
5. Type <code>git clone</code> and then paste the URL you copied earlier. It will look like

```bash
git clone "PAST_URL_YOU_COPIED"
```

## Creating a branch to work on

Before making changes to the project, you should create a new branch and check it out. By keeping changes in their own branch, you follow GitHub Flow and ensure that it will be easier to contribute to the same project again in the future.

```bash
git branch BRANCH-NAME
```
```bash
git checkout BRANCH-NAME
```

## Making and pushing changes

Go ahead and make the changes to the project using your favourite text editor, like Visual Studio Code.

When you're ready to submit your changes, stage and commit your changes. <code>git add .</code> tells Git that you want to include all of your changes in the next commit. git commit takes a snapshot of those changes.

```bash
git add .
```
```bash
git commit -m "a short description of the change"
```

When you stage and commit files, you essentially tell Git, "Okay, take a snapshot of my changes!" You can continue to make more changes and take more commit snapshots.

Right now, your changes only exist locally. When you're ready to push your changes up to GitHub, push your changes to the remote.

```bash
git push
```

## Making a pull request

At last, you're ready to propose changes to the main project! 

This is the final step in producing a fork of someone else's project in this case its <code>harshit:portfolio</code>, and arguably the most important. If you've made a change that you feel would benefit the community as a whole, you should consider contributing back.

To do so, head on over to the repository on GitHub where your project lives. For this example, it would be at <code>https://github.com/<your_username>/portfolio.</code> You'll see a banner indicating that your branch is one commit ahead of <code>harshit:main</code>. Click Contribute and then Open a pull request.

GitHub will bring you to a page that shows the differences between your fork and the <code>harshit/portfolio</code> repository. Click Create pull request.

GitHub will bring you to a page where you can enter a title and a description of your changes. It's important to provide as much useful information and a rationale for why you're making this pull request in the first place. 
So that I will be able to the proper details for your changes so while reviewing the code its easy for me to do.

Finally, click Create pull request.
