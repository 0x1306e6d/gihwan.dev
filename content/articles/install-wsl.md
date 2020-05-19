---
slug: "/articles/install-wsl"
date: "2020-05-20"
title: "Windows에 WSL (Windows Subsystem for Linux) 설치"
---

# Windows Subsystem for Linux

> 리눅스용 윈도우 하위 시스템 (Windows Subsystem for Linux, WSL)은 Windows 10 및
> Windows Server 2019에서 네이티브로 리눅스 실행 파일을 실행하기 위한 호환성 계층이다. (출처:
> Wikipedia)

WSL은 Windows 10 및 Windows Server 2019 사용자는 별도의 가상화 환경을 구축할 필요 없이 리눅스
시스템을 사용할 수 있도록 한다. 초기에는 Ubuntu만 지원하였으나, 현재 openSUSE Leap 42, SUSE
Linux Enterprise Server 12 등 다양한 리눅스 배포판을 지원한다. 아쉬운 점은 시스템 콜을
에뮬레이션 해 윈도우가 처리하는 방식으로, 리눅스의 모든 기능을 사용할 수는 없다. 다행히 이번에 WSL 2가
리눅스 커널을 포함하는 것으로 발표되어 앞으로의 기대감이 높은 상황이다.

# Windows에 WSL 설치

윈도우에 WSL을 설치하기 위해선 먼저 Linux용 Windows 하위 시스템 기능을 켜야 한다.

설정의 앱 및 기능에서 우측 상단에 있는 프로그램 및 기능을 실행한다.

프로그램 및 기능에서 좌측 상단에 있는 Windows 기능 켜기/끄기를 실행한다.

상단의 Linux용 Windows 하위 시스템 항목을 체크한 후 확인 버튼을 누른다.

설치 과정을 거친 후 PC를 다시 부팅 한다.

부팅이 완료되었다면 Microsoft Store 앱에서 원하는 리눅스 배포판을 설치한다. 본 게시글에서는 Ubuntu를 설치하였다.

설치 버튼을 클릭하여 설치를 진행한다.

설치가 완료되었다면 설치한 앱을 실행한다.

추가적인 설치 과정을 거친 후 리눅스 계정을 설정하면 설치가 완료된다.

# Windows Subsystems for Linux 2

출처: Microsoft 개발자 블로그

2019년 5월 초 WSL 2가 발표되었다. WSL과 차이점은 리눅스 커널을 포함한다는 점으로, 에뮬레이션 하던
시스템 콜을 직접 처리할 수 있다. Microsoft는 WSL 2가 WSL 1과 비교해 20배 빨라졌다고 한다.
자세한 내용은 Microsoft 개발자 블로그의 Announcing WSL 2나 ZDNet Korea의 기사
[MS 윈도, 리눅스 커널 품는다](http://www.zdnet.co.kr/view/?no=20190508070053) 혹은
[윈도10 속 리눅스커널로 되는 것, 안 되는 것](http://www.zdnet.co.kr/view/?no=20190520112101)에
자세히 설명되어있다.
