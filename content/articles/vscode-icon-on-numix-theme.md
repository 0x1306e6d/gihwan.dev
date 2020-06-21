---
slug: "/articles/vscode-icon-on-numix-theme"
date: "2020-05-20"
title: "Numix 아이콘 테마에서의 Visual Studio Code 아이콘"
---

요즘 연구실에서 Ubuntu를 주 OS로 사용하고 있다. Ubuntu를 사용하다 보면 Unity든 Gnome이든 기본
테마는 상당히 못생긴 느낌이 있어 다른 테마를 설치한다. 아이콘 테마로 주로 Numix-Circle 테마를
사용하는데, 이 경우 Visual Studio Code를 설치하면 아이콘이 정상적으로 나오지 않는다. 또한,
Numix의 Numix-Square 아이콘 테마에서도 같은 문제가 발생하는 것으로 파악하였다.

원인을 찾아보니 gedit 등에서 사용하는 Numix의 code 아이콘이 Visual Studio Code에도 적용되어
발생하는 것이었다. 따라서 Visual Studio Code의 아이콘 설정을 변경하여 정상적인 아이콘이 나오게 하는
방법을 찾아보았다.

Visual Studio Code의 데스크톱 설정 파일을 연다.

```
sudo vi /usr/share/applications/code.desktop
```

아무것도 수정하지 않았다면 다음과 같이 나올 것이다.

```
[Desktop Entry]
Name=Visual Studio Code
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/share/code/code --unity-launch %F
Icon=code
Type=Application
StartupNotify=true
StartupWMClass=Code
Categories=Utility;TextEditor;Development;IDE;
MimeType=text/plain;inode/directory;
Actions=new-empty-window;
Keywords=vscode;

X-Desktop-File-Install-Version=0.23

[Desktop Action new-empty-window]
Name=New Empty Window
Exec=/usr/share/code/code --new-window %F
Icon=code
```

code로 설정되어 있는 Icon을 visual-studio code로 변경한다.

```
[Desktop Entry]
Name=Visual Studio Code
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/share/code/code --unity-launch %F
Icon=visual-studio-code
Type=Application
StartupNotify=true
StartupWMClass=Code
Categories=Utility;TextEditor;Development;IDE;
MimeType=text/plain;inode/directory;
Actions=new-empty-window;
Keywords=vscode;

X-Desktop-File-Install-Version=0.23

[Desktop Action new-empty-window]
Name=New Empty Window
Exec=/usr/share/code/code --new-window %F
Icon=visual-studio-code
```

저장한 후 재부팅 하면 정상적으로 Visual Studio Code의 아이콘이 나오는 것을 확인할 수 있다.