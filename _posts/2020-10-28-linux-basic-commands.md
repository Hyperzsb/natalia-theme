---
title: Linux - 基本命令
date: 2020-10-28
last_update:
tags: linux
toc: true
comment: true
pinned: false
---

在使用 Linux 常会遇到一些不太常用但又非常基本的命令，今天就来总结一下。**持续更新...**

# 系统环境

以下所有命令均基于 Ubuntu 18.04 amd64 版本以及 CentOS 7.8 amd64。不保证在其它发行版上的正确性。但是在通常情况下是通用的。

# 查询系统信息

## 基本信息

- 系统位数

  - Ubuntu

    ```shell
    $ getconf LONG_BIT
    64
    $ file /bin/ls
    /bin/ls: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=9567f9a28e66f4d7ec4baf31cfbf68d0410f0ae6, stripped
    ```

  - CentOS

    ```shell
    $ getconf LONG_BIT
    64
    $ file /bin/ls
    /bin/ls: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=aaf05615b6c91d3cbb076af81aeff531c5d7dfd9, stripped
    ```

- 系统内核版本信息

  - Ubuntu

    ```shell
    $ uname -a
    Linux iZ2zehx4vggo1gk4clxdy2Z 4.15.0-48-generic #51-Ubuntu SMP Wed Apr 3 08:28:49 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux
    ```

  - CentOS

    ```shell
    $ uname -a
    Linux iz2zefu8x0w8a73lncvuicz 3.10.0-1127.13.1.el7.x86_64 #1 SMP Tue Jun 23 15:46:38 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
    ```

- 系统内核版本、编译等信息

  - Ubuntu

    ```shell
    $ cat /proc/version
    Linux version 4.15.0-48-generic (buildd@lgw01-amd64-036) (gcc version 7.3.0 (Ubuntu 7.3.0-16ubuntu3)) #51-Ubuntu SMP Wed Apr 3 08:28:49 UTC 2019
    ```

  - CentOS

    ```shell
    $ cat /proc/version
    Linux version 3.10.0-1127.13.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC) ) #1 SMP Tue Jun 23 15:46:38 UTC 2020
    ```

- 系统内核模块加载信息

  - Ubuntu

    ```sh
    $ lsmod
    Module                  Size  Used by
    btrfs                1122304  0
    zstd_compress         163840  1 btrfs
    xor                    24576  1 btrfs
    raid6_pq              114688  1 btrfs
    ufs                    77824  0
    qnx4                   16384  0
    ...
    ```

  - CentOS

    ```shell
    $ lsmod
    Module                  Size  Used by
    xt_nat                 12681  6 
    binfmt_misc            17468  1 
    veth                   13458  0 
    xt_conntrack           12760  2 
    ipt_MASQUERADE         12678  4 
    nf_nat_masquerade_ipv4    13463  1 ipt_MASQUERADE
    ```

- 查看系统发行版本信息

  - Ubuntu

    ```shell
    $ lsb_release -a
    LSB Version:    core-9.20170808ubuntu1-noarch:security-9.20170808ubuntu1-noarch
    Distributor ID: Ubuntu
    Description:    Ubuntu 18.04.5 LTS
    Release:        18.04
    Codename:       bionic
    $ cat /etc/issue
    Ubuntu 18.04.5 LTS \n \l
    ```

  - CentOS

    ```shell
    $ lsb_release -a
    LSB Version:    :core-4.1-amd64:core-4.1-noarch
    Distributor ID: CentOS
    Description:    CentOS Linux release 7.8.2003 (Core)
    Release:        7.8.2003
    Codename:       Core
    $ cat /etc/redhat-release
    CentOS Linux release 7.8.2003 (Core)
    ```

- 开机时间、用户数、平均负载信息

  - Ubuntu

    ```shell
    $ uptime
     11:12:30 up 47 days, 49 min,  1 user,  load average: 0.00, 0.00, 0.00
    ```

  - CentOS

    ```shell
    $ uptime
     11:13:14 up 68 days,  1:24,  1 user,  load average: 0.00, 0.01, 0.05
    ```

## 硬件信息

- 查看 CPU 信息

  - Ubuntu

    ```shell
    # 基本信息
    $ lscpu
    Architecture:        x86_64
    CPU op-mode(s):      32-bit, 64-bit
    Byte Order:          Little Endian
    CPU(s):              1
    On-line CPU(s) list: 0
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           1
    NUMA node(s):        1
    Vendor ID:           GenuineIntel
    CPU family:          6
    Model:               85
    Model name:          Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
    Stepping:            4
    CPU MHz:             2499.998
    BogoMIPS:            4999.99
    Hypervisor vendor:   KVM
    Virtualization type: full
    L1d cache:           32K
    L1i cache:           32K
    L2 cache:            1024K
    L3 cache:            33792K
    NUMA node0 CPU(s):   0
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single pti ibrs ibpb stibp fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx avx512f avx512dq rdseed adx smap avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat
    # 详细信息，精确到每一核
    $ cat /proc/cpuinfo
    processor       : 0
    vendor_id       : GenuineIntel
    cpu family      : 6
    model           : 85
    model name      : Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
    stepping        : 4
    microcode       : 0x1
    cpu MHz         : 2499.998
    cache size      : 33792 KB
    physical id     : 0
    siblings        : 1
    core id         : 0
    cpu cores       : 1
    apicid          : 0
    initial apicid  : 0
    fpu             : yes
    fpu_exception   : yes
    cpuid level     : 13
    wp              : yes
    flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single pti ibrs ibpb stibp fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx avx512f avx512dq rdseed adx smap avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat
    bugs            : cpu_meltdown spectre_v1 spectre_v2 spec_store_bypass l1tf
    bogomips        : 4999.99
    clflush size    : 64
    cache_alignment : 64
    address sizes   : 46 bits physical, 48 bits virtual
    power management:
    ...
    ```

  - CentOS

    ```shell
    # 基本信息
    $ lscpu
    Architecture:          x86_64
    CPU op-mode(s):        32-bit, 64-bit
    Byte Order:            Little Endian
    CPU(s):                4
    On-line CPU(s) list:   0-3
    Thread(s) per core:    2
    Core(s) per socket:    2
    Socket(s):             1
    NUMA node(s):          1
    Vendor ID:             GenuineIntel
    CPU family:            6
    Model:                 85
    Model name:            Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz
    Stepping:              7
    CPU MHz:               2500.000
    BogoMIPS:              5000.00
    Hypervisor vendor:     KVM
    Virtualization type:   full
    L1d cache:             32K
    L1i cache:             32K
    L2 cache:              1024K
    L3 cache:              36608K
    NUMA node0 CPU(s):     0-3
    Flags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc eagerfpu pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx avx512f avx512dq rdseed adx smap avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat avx512_vnni
    # 详细信息，精确到每一核
    $ cat /proc/cpuinfo
    processor       : 0
    vendor_id       : GenuineIntel
    cpu family      : 6
    model           : 85
    model name      : Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz
    stepping        : 7
    microcode       : 0x1
    cpu MHz         : 2500.000
    cache size      : 36608 KB
    physical id     : 0
    siblings        : 4
    core id         : 0
    cpu cores       : 2
    apicid          : 0
    initial apicid  : 0
    fpu             : yes
    fpu_exception   : yes
    cpuid level     : 22
    wp              : yes
    flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc eagerfpu pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx avx512f avx512dq rdseed adx smap avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat avx512_vnni
    bogomips        : 5000.00
    clflush size    : 64
    cache_alignment : 64
    address sizes   : 46 bits physical, 48 bits virtual
    power management:
    ...
    ```

- 内存信息

  - Ubuntu

    ```shell
    $ free -m
                  total        used        free      shared  buff/cache   available
    Mem:           1993         560          96           1        1336        1249
    Swap:           947           6         940
    $ cat /proc/meminfo
    MemTotal:        7733000 kB
    MemFree:         2780720 kB
    MemAvailable:    5848968 kB
    Buffers:          284336 kB
    Cached:          2817548 kB
    SwapCached:            0 kB
    Active:          3272980 kB
    Inactive:        1291048 kB
    Active(anon):    1462416 kB
    Inactive(anon):      264 kB
    Active(file):    1810564 kB
    Inactive(file):  1290784 kB
    Unevictable:           0 kB
    Mlocked:               0 kB
    SwapTotal:             0 kB
    SwapFree:              0 kB
    Dirty:                24 kB
    Writeback:             0 kB
    AnonPages:       1462140 kB
    Mapped:           117640 kB
    Shmem:               540 kB
    Slab:             292916 kB
    SReclaimable:     271868 kB
    SUnreclaim:        21048 kB
    KernelStack:        3696 kB
    PageTables:         7240 kB
    NFS_Unstable:          0 kB
    Bounce:                0 kB
    WritebackTmp:          0 kB
    CommitLimit:     3866500 kB
    Committed_AS:    2402088 kB
    VmallocTotal:   34359738367 kB
    VmallocUsed:       19948 kB
    VmallocChunk:   34359712252 kB
    Percpu:              800 kB
    HardwareCorrupted:     0 kB
    AnonHugePages:   1230848 kB
    CmaTotal:              0 kB
    CmaFree:               0 kB
    HugePages_Total:       0
    HugePages_Free:        0
    HugePages_Rsvd:        0
    HugePages_Surp:        0
    Hugepagesize:       2048 kB
    DirectMap4k:       96952 kB
    DirectMap2M:     2768896 kB
    DirectMap1G:     5242880 kB
    ```

  - CentOS

    ```shell
    $ free -m
                  total        used        free      shared  buff/cache   available
    Mem:           7551        1541        2715           0        3294        5711
    Swap:             0           0           0
    $ cat /proc/meminfo
    MemTotal:        7733000 kB
    MemFree:         2781092 kB
    MemAvailable:    5849356 kB
    Buffers:          284336 kB
    Cached:          2817568 kB
    SwapCached:            0 kB
    Active:          3273048 kB
    Inactive:        1291032 kB
    Active(anon):    1462452 kB
    Inactive(anon):      264 kB
    Active(file):    1810596 kB
    Inactive(file):  1290768 kB
    Unevictable:           0 kB
    Mlocked:               0 kB
    SwapTotal:             0 kB
    SwapFree:              0 kB
    Dirty:                24 kB
    Writeback:             0 kB
    AnonPages:       1462208 kB
    Mapped:           117640 kB
    Shmem:               540 kB
    Slab:             292884 kB
    SReclaimable:     271868 kB
    SUnreclaim:        21016 kB
    KernelStack:        3696 kB
    PageTables:         7240 kB
    NFS_Unstable:          0 kB
    Bounce:                0 kB
    WritebackTmp:          0 kB
    CommitLimit:     3866500 kB
    Committed_AS:    2402088 kB
    VmallocTotal:   34359738367 kB
    VmallocUsed:       19948 kB
    VmallocChunk:   34359712252 kB
    Percpu:              800 kB
    HardwareCorrupted:     0 kB
    AnonHugePages:   1230848 kB
    CmaTotal:              0 kB
    CmaFree:               0 kB
    HugePages_Total:       0
    HugePages_Free:        0
    HugePages_Rsvd:        0
    HugePages_Surp:        0
    Hugepagesize:       2048 kB
    DirectMap4k:       96952 kB
    DirectMap2M:     2768896 kB
    DirectMap1G:     5242880 kB
    ```

- 磁盘信息

  - Ubuntu

    ```shell
    $ lsblk
    NAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
    vda    252:0    0  40G  0 disk 
    └─vda1 252:1    0  40G  0 part /
    $ df
    Filesystem     1K-blocks     Used Available Use% Mounted on
    udev              998184        0    998184   0% /dev
    tmpfs             204124     6704    197420   4% /run
    /dev/vda1       41152812 10847444  28401712  28% /
    tmpfs            1020608        0   1020608   0% /dev/shm
    tmpfs               5120        0      5120   0% /run/lock
    tmpfs            1020608        0   1020608   0% /sys/fs/cgroup
    overlay         41152812 10847444  28401712  28% /var/lib/docker/overlay2/be844ce0c2b9815231c6cacfbe3c23a95bc3f60178dd1d47ccd0193e534eae33/merged
    tmpfs             204120        0    204120   0% /run/user/0
    $ fdisk -l
    Disk /dev/vda: 40 GiB, 42949672960 bytes, 83886080 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xfec7dc5a
    
    Device     Boot Start      End  Sectors Size Id Type
    /dev/vda1  *     2048 83886046 83883999  40G 83 Linux
    # 磁盘读写速度
    $ iostat
    Linux 4.15.0-48-generic (iZ2zehx4vggo1gk4clxdy2Z)       10/28/2020      _x86_64_        (1 CPU)
    
    avg-cpu:  %user   %nice %system %iowait  %steal   %idle
               0.59    0.00    0.45    0.02    0.00   98.94
    
    Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
    vda               0.57         0.97         4.55    3912031   18372393
    
    ```

  - CentOS

    ```shell
    $ lsblk
    NAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
    vda    253:0    0  40G  0 disk 
    └─vda1 253:1    0  40G  0 part /
    $ df
    Filesystem     1K-blocks    Used Available Use% Mounted on
    devtmpfs         3856184       0   3856184   0% /dev
    tmpfs            3866500       0   3866500   0% /dev/shm
    tmpfs            3866500     540   3865960   1% /run
    tmpfs            3866500       0   3866500   0% /sys/fs/cgroup
    /dev/vda1       41151808 8950652  30087724  23% /
    tmpfs             773300       0    773300   0% /run/user/0
    overlay         41151808 8950652  30087724  23% /var/lib/docker/overlay2/33222ef47484c66c3b4e48b0d57fb3bd8584894c8751c011c8894f545a9e2e09/merged
    $ fdisk -l
    
    Disk /dev/vda: 42.9 GB, 42949672960 bytes, 83886080 sectors
    Units = sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disk label type: dos
    Disk identifier: 0x0008de3e
    
       Device Boot      Start         End      Blocks   Id  System
    /dev/vda1   *        2048    83884031    41940992   83  Linux
    # 磁盘读写速度
    $ iostat
    Linux 3.10.0-1127.13.1.el7.x86_64 (iz2zefu8x0w8a73lncvuicz)     10/28/2020      _x86_64_        (4 CPU)
    
    avg-cpu:  %user   %nice %system %iowait  %steal   %idle
               0.09    0.00    0.07    0.00    0.00   99.84
    
    Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
    vda               0.23         0.11         1.99     676105   11672940
    
    ```

- PCI 设备信息

  - Ubuntu

    ```shell
    $ lspci -tv
    -[0000:00]-+-00.0  Intel Corporation 440FX - 82441FX PMC [Natoma]
               +-01.0  Intel Corporation 82371SB PIIX3 ISA [Natoma/Triton II]
               +-01.1  Intel Corporation 82371SB PIIX3 IDE [Natoma/Triton II]
               +-01.2  Intel Corporation 82371SB PIIX3 USB [Natoma/Triton II]
               +-01.3  Intel Corporation 82371AB/EB/MB PIIX4 ACPI
               +-02.0  Cirrus Logic GD 5446
               +-03.0  Red Hat, Inc. Virtio network device
               +-04.0  Red Hat, Inc. Virtio console
               +-05.0  Red Hat, Inc. Virtio block device
               \-06.0  Red Hat, Inc. Virtio memory balloon
    ```

  - CentOS

    ```shell
    $ lspci -tv
    -[0000:00]-+-00.0  Intel Corporation 440FX - 82441FX PMC [Natoma]
               +-01.0  Intel Corporation 82371SB PIIX3 ISA [Natoma/Triton II]
               +-01.1  Intel Corporation 82371SB PIIX3 IDE [Natoma/Triton II]
               +-01.2  Intel Corporation 82371SB PIIX3 USB [Natoma/Triton II]
               +-01.3  Intel Corporation 82371AB/EB/MB PIIX4 ACPI
               +-02.0  Cirrus Logic GD 5446
               +-03.0  Red Hat, Inc. Virtio console
               +-04.0  Red Hat, Inc. Virtio block device
               +-05.0  Red Hat, Inc. Virtio network device
               \-06.0  Red Hat, Inc. Virtio memory balloon
    ```

- USB 设备信息

  - Ubuntu

    ```shell
    $ lsusb -tv
    /:  Bus 01.Port 1: Dev 1, Class=root_hub, Driver=uhci_hcd/2p, 12M
        |__ Port 1: Dev 2, If 0, Class=Human Interface Device, Driver=usbhid, 12M
    ```

# 常用工具

## 压缩 / 解压缩

- .zip

  - 压缩

    ```shell
    $ zip demo.zip ./demo_a ./demo_b
    ```

  - 解压

    ```shell
    $ unzip demo.zip
    ```

  > 更多参数请参考相关命令说明手册

- .tar

  - 压缩

    ```shell
    $ tar -cvf demo.tar ./demo_a ./demo_b
    ```

  - 解压

    ```shell
    $ tar -xvf demo.tar
    ```

  > 更多参数请参考相关命令说明手册

- tar.gz

  - 压缩

    ```shell
    $ tar -zcvf demo.tar.gz ./demo_a ./demo_b
    ```

  - 解压

    ```shell
    $ tar -zxvf demo.tar.gz
    ```

  > 更多参数请参考相关命令说明手册

## 图片处理

Linux 平台有很多用于处理图片的工具，例如`ImageMagick`、`jpegoptim` 和 `pngcrush` 等。这里主要介绍 `ImageMagick` 的用法。

- ImageMagick 介绍：

  - [ImageMagick 官网](https://imagemagick.org/script/index.php)
  - 使用 ImageMagick 的创建，编辑，撰写，或转换位图图像。它可以读取和写入各种格式（超过200种）的图像，包括 PNG，JPEG，GIF，HEIC，TIFF，DPX，EXR，WebP，Postscript，PDF 和 SVG。使用ImageMagick可以调整图像大小，翻转，镜像，旋转，变形，剪切和变换图像，调整图像颜色，应用各种特殊效果或绘制文本，线条，多边形，椭圆和贝塞尔曲线。

- ImageMagick 安装：

  - 本地 apt 安装：

    ```shell
    $ apt install imagemagick
    ```

  - 官网下载即用型二进制文件：

    ```shell
    $ wget https://download.imagemagick.org/ImageMagick/download/binaries/magick
    ```

  > 注意：由于 apt 安装的 ImageMagick 版本为7以下版本，故不支持 `magick` 命令，依旧需要使用诸如 `convert`、`identify` 和 `animate` 等字命令来进行工作

- ImageMagick 样例：

  - 转换格式：

    ```shell
    $ convert xxx.jpeg xxx.png
    ```

  - 压缩图片：

    ```sh
    # 将图片像素改为1920*1080
    $ convert -resize 1920x1080 xxx.jpeg xxx.jpeg
    # 将图片压缩为原来的50%*50%
    $ convert -sample 50%x50% xxx.jpeg xxx.jpeg
    # 使用 -quality 参数控制压缩图片的质量，参数值可以是0～100之间的任意数
    $ convert -resize 500x500 -quality 75 xxx.jpeg xxx.jpeg
    ```

  - 批量压缩图片：

    ```shell
    # 压缩当前目录下所有后缀名包含在列表中的图片
    $ find ./ -regex '.*\(jpg\|JPG\|png\|PNG\|jpeg\)' -size +50k -exec convert -resize 100x100 {} {} \;
    ```

## 远程连接

- SSH 连接远程主机：

  ```shell
  $ ssh root@112.113.114.115 # 以 root 用户身份登陆 112.113.114.115 IP 对应的远程主机
  $ ssh user@myhost.com # 以 user 用户身份登陆 myhost.com 域名对应的远程主机
  ```

- 向（从）远程主机复制文件：

  ```shell
  $ scp ~/myfile.txt root@112.113.114.115:/root/CopyFiles/ # 将本机主目录下的 myfile.txt 复制到以 root 身份登陆的 112.113.114.115 IP 对应的远程主机的 /root/CopyFiles/ 目录下
  $ scp user@myhost.com:/home/user/myfile.txt ~/CopyFiles/ # 将以 root 身份登陆的 112.113.114.115 IP 对应的远程主机的 /home/user/myfile.txt 复制到本机主目录的 CopyFiles 目录下
  ```

# 参考

- [Linux 图片批量压缩工具 ImageMagick](https://blog.csdn.net/qq_38228582/article/details/104836907)