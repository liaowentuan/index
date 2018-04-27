<template>
    <div class="page">
      <h3>地图服务器相关知识</h3>
      <pre>
        sudo fdisk -l

        Disk /dev/sdd: 2 TiB, 2199023255552 bytes, 4294967296 sectors      ## 为挂载硬盘
        Units: sectors of 1 * 512 = 512 bytes
        Sector size (logical/physical): 512 bytes / 512 bytes
        I/O size (minimum/optimal): 512 bytes / 512 bytes

        Disk /dev/sda: 30 GiB, 32212254720 bytes, 62914560 sectors         ## 已挂载硬盘
        Units: sectors of 1 * 512 = 512 bytes
        Sector size (logical/physical): 512 bytes / 512 bytes
        I/O size (minimum/optimal): 512 bytes / 512 bytes
        Disklabel type: gpt
        Disk identifier: 634C3D5B-0D0D-474F-9F67-F1215DC3BD18

        Device        Start      End  Sectors  Size Type                   # 标识
        /dev/sda1      2048  1050623  1048576  512M EFI System
        /dev/sda2   1050624 46141439 45090816 21.5G Linux filesystem
        /dev/sda3  46141440 62912511 16771072    8G Linux swap

        // /dev/sdb

        GPT(GUID)分区(推荐使用）

        用parted工具, 既可以GPS, 也可以MBR

        sudo parted  # 进入parted工具，输入help可查看帮助

        select /dev/sda  # 选择你要操作的设备，一定要注意，不要把默认设备误操作了

        mklabel gpt  # 设定使用的分区类型, 如果要用MBR分区，输入msdos即可。

        mkpart  # 添加一个分区

        输入分区名称，回车

        输入使用哪种文件系统，默认ext2，回车 （此处可以随意选，之后重新格式化写入文件系统）

        输入分区从第几Mb的位置开始，输入1，从第1Mb开始（最好不要从0开始）

        输入分区从第几Mb结束，输入2000，第2000Mb结束

        此时已经分区成功，输入print查看目前分区情况

        ctrl + D 退出程序

        格式化调整inode大小  （上限是2^32个inode节点）
        mkfs.ext3 /dev/sda6 -N 18276352

        于是我查了下google，发现ext2/3是128字节，ext4是256字节，以下是ext2/ext4对应的结构。

        sudo mount /dev/sdb1 /var/www/html/17

        查看是否成功  lsblk

        $ sudo blkid /dev/sdb1 #UUID磁盘唯一标识，设置自动挂载

        # 设置系统启动，自动挂载分区
        $ sudo vim /etc/fstab #fstab文件，每次重启会读取这个文件对磁盘进行自动挂载
        # 添加如下的挂载项
        UUID=5bbe4e3b-2870-4ddd-93a8-86fcb0692e6f /data ext4 errors=remount-ro 0 1

        # 获取/dev/sdb1 的 uuid
        $ sudo blkid /dev/sdb1 #UUID磁盘唯一标识，设置自动挂载
        /dev/sdb1: UUID="5bbe4e3b-2870-4ddd-93a8-86fcb0692e6f" TYPE="ext4" PARTLABEL="Linux filesystem"
        PARTUUID="b0292da5-5457-4077-bfba-9339306bc0c1"
        # 设置系统启动，自动挂载分区
        $ sudo vim /etc/fstab #fstab文件，每次重启会读取这个文件对磁盘进行自动挂载
        # 添加如下的挂载项
        UUID=5bbe4e3b-2870-4ddd-93a8-86fcb0692e6f /data ext4 errors=remount-ro 0 1

        # 查看硬盘挂载
        df -h
        直接卸载
        umount /dev/sda6
        直接挂载
        mount /dev/sda6 ./test
        查看结果
        df -h

        # 查看inode使用率
        df -i
      </pre>
    </div>
</template>

<script>
export default {
  name: 'map-server',
  data () {
    return {
      msg: 'this is map-server'
    }
  }
}
</script>

<style scoped>

</style>
