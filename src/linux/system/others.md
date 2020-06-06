## usermod

usermod -G groupname username (这种会把用户从其他组中去掉，只属于该组)
如:usermod -G git git (git 只属于 git 组)

usermod -a -G groupname username (把用户添加到这个组，之前所属组不影响)
如:usermod -a -G www git (git 属于之前 git 组，也属于 www 组)
