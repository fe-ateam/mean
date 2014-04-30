GIT commands
============

Workflow
--------

Workspace <===> Index <===> Local repo <===> Remote repo

Check out [this article](http://blog.osteele.com/posts/2008/05/my-git-workflow) for better illustration.


Commands
--------

Set default pull/push branch

```
git config push.default current
git config pull.default current
```

Pull from remote repo

```
git pull
```

Add changes from workspace to index

```
git add -A
```

Commit changes to local repo

```
git commit -m "my message"
```

Push to remote repo

```
git push
```

Revert changes in index

```
git checkout -- filename
```

Revert changes in local repo

```
git checkout HEAD filename
```


