# Exit if shell is not running interactively
[[ $- != *i* ]] && return

# Correct minor errors in directory spelling using 'cd'
shopt -s cdspell

# Check and update LINES and COLUMNS after each (external) commands
shopt -s checkwinsize

# Use GNU error format for shell error messages
shopt -s gnu_errfmt

# Correct error in directory names when using tab-completions
shopt -s dirspell

# Append history list to HISTFILE instead of overwriting it
shopt -s histappend

# Allow re-editing a failed command during history substitution
shopt -s histreedit

# Check for stopped jobs before exiting an interactive shell
shopt -s checkjobs

export HISTSIZE="25000"
export HISTFILESIZE="25000"
export HISTFILE="/home/${SUDO_USER:=$USER}/.bash_history"
export HISTCONTROL="erasedups:ignoredups:ignorespace"
export TMPDIR="/tmp"
export PATH=/home/"${SUDO_USER:=$USER}"/.local/bin:/sbin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/sbin:/bin

alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias vi='vim'
alias void='ping -c4 voidlinux.org'

# Use vi/vim keybindings
set -o vi

# Set colors
green="\[\e[1;32m\]"
blue="\[\e[1;34m\]"
yellow="\[\e[1;33m\]"
magenta="\[\e[1;35m\]"
cyan="\[\e[1;36m\]"
white="\[\e[1;97m\]"
none="\[\e[00m\]"
	
# Handles Android
[[ -d /system/app/ && -f /system/build.prop ]] && {
	unset HISTFILE

	# Don't use any fallback if no external storage
	unset EXTERNAL_STORAGE

	[[ $USER != "root" || $EUID -eq 1000 ]] && {
		externalstorage="$(df -h | grep /storage | awk 'NR==2 {print $6}')"
		export EXTERNAL_STORAGE="$externalstorage"
	}

	[[ $EUID -eq 0 || $USER == "root" ]] && {
		# Set external storage to USB-OTG or SD card if available
		for available_storage in /storage/*-*; do
			[[ -d $available_storage ]] && {
				export EXTERNAL_STORAGE="$available_storage"
				break
			}
		done
	}

	# Set internal storage
	export PHONE_STORAGE="/mnt/sdcard"

	export HOME="$PHONE_STORAGE"
	export TERM="xterm-256color"
	export SHELL="$0"
	export PATH=/system/bin:/system/xbin:/sbin

	# Expand path for devices with termux installed
	[[ $(pm list packages "com.termux" 2>/dev/null) ]] && {
		export PATH=/data/data/com.termux/files/usr/bin:/system/bin:/system/xbin:/sbin
	}

	export TMPDIR="/data/local/tmp"
	# Fixes empty $USER in non-root termux
	[[ -z $USER ]] && {
		: '\u'
		USER="${_@P}"
	}

	alias external='cd $EXTERNAL_STORAGE'
	alias sdcard='cd $PHONE_STORAGE'
	alias termux='cd /data/data/com.termux/files'

	alias vi='busybox vi'
	alias vim='vi'

	MODULE_DIRECTORY=/data/adb/modules/tether
	alias bash='bash --rcfile $MODULE_DIRECTORY/system/etc/bash/.bashrc'

	[[ $USER == "root" || $EUID -eq 0 ]] && {
		blue=$magenta
		PS1="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}] [${green}\w${white}]\n${white}╰── ${yellow}$ ${none}"
		PS2="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}]\n${white}╰── ${yellow}> ${none}"
		cd ~
	}

	[[ $USER == "shell" || $EUID -eq 2000 ]] && {
		blue=$cyan
		PS1="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}] [${green}\w${white}]\n${white}╰── ${yellow}$ ${none}"
		PS2="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}]\n${white}╰── ${yellow}> ${none}"
		cd ~
	}

	[[ $USER != "root" && $USER != "shell" ]] || [[ $EUID -ge 1000 ]] && {
		PS1="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}] [${green}\w${white}]\n${white}╰── ${yellow}$ ${none}"
		PS2="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}]\n${white}╰── ${yellow}> ${none}"
		cd ~
	}
}

# Handles Android (chroot)
[[ ! -d /system/app && -d /sys/class/power_supply/battery ]] && {
	unset ANDROID_I18N_ROOT
	unset DEX2OATBOOTCLASSPATH
	unset PREFIX
	unset BOOTCLASSPATH
	unset ANDROID_ROOT
	unset ANDROID_TZDATA_ROOT
	unset ANDROID_ART_ROOT
	unset ANDROID_DATA

	export EXTERNAL_STORAGE="/media"
	export PHONE_STORAGE="/mnt/sdcard"

	alias external='cd $EXTERNAL_STORAGE'
	alias sdcard='cd $PHONE_STORAGE'

	module_dns="/mnt/module-dnscrypt"

	alias querylogs='vi $module_dns/query-logs.log'
	alias dnslogs='vi $module_dns/dnscrypt-proxy.log'
	alias blockedlogs='vi $module_dns/blocked-names.log'
	alias blockedips='vi $module_dns/blocked-ips.log'
	alias allowedlogs='vi $module_dns/allowed-names.log'

	alias editallowed='vi $module_dns/allowed-names.txt'
	alias editblocked='vi $module_dns/blocked-names.txt'
	alias editcloaked='vi $module_dns/cloaking-rules.txt'
	alias editblockedips='vi $module_dns/blocked-ips.txt'

	alias edittether="vi /home/${SUDO_USER:=$USER}/.local/bin/tether"

	[[ $EUID -eq 0 || $USER == "root" ]] && {
		blue=$magenta
		PS1="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}] [${green}\w${white}]\n${white}╰── ${yellow}$ ${none}"
		PS2="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}]\n${white}╰── ${yellow}> ${none}"
	}

	[[ $EUID -gt 0 || $USER != "root" ]] && {
		PS1="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}] [${green}\w${white}]\n${white}╰── ${yellow}$ ${none}"
		PS2="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}]\n${white}╰── ${yellow}> ${none}"
		cd ~
		[[ $SHLVL -eq 4 ]] && {
			session=$(tmux ls 2>/dev/null | wc -l)
			active=$(tmux ls 2>/dev/null | grep -c '(attached)')
			[[ $session -gt $active ]] && tmux attach && return 0
			tmux 2>/dev/null
		}
	}
}

# Handles Linux desktop including Virtual Machines
[[ -d /sys/class/power_supply/BAT0 ]] ||

# Check if device has a Snapdragon CPU and is an Android device
[[ ! -d /sys/class/kgsl && ! -d /sys/class/power_supply/battery ]] ||

# Check if device has a Mediatek CPU and is an Android device
[[ ! -d /proc/gpufreq && ! -d /sys/class/power_supply/battery ]] && {
	alias querylogs="vi /etc/dnscrypt-proxy/query-logs.log"
	alias dnslogs="vi /etc/dnscrypt-proxy/dnscrypt-proxy.log"
	alias blockedlogs="vi /etc/dnscrypt-proxy/blocked-names.log"
	alias blockedips="vi /etc/dnscrypt-proxy/blocked-ips.log"
	alias allowedlogs="vi /etc/dnscrypt-proxy/allowed-names.log"

	alias editallowed="vi /etc/dnscrypt-proxy/allowed-names.txt"
	alias editblocked="vi /etc/dnscrypt-proxy/blocked-names.txt"
	alias editcloaked='vi /etc/dnscrypt-proxy/cloaking-rules.txt'
	alias editblockedips="vi /etc/dnscrypt-proxy/blocked-ips.txt"

	alias edittether="vi /home/${SUDO_USER:=$USER}/.local/bin/tether"

	[[ $EUID -eq 0 || $USER == "root" ]] && {
		blue=$magenta
		PS1="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}] [${green}\w${white}]\n${white}╰── ${yellow}$ ${none}"
		PS2="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}]\n${white}╰── ${yellow}> ${none}"
	}

	[[ $EUID -gt 0 || $USER != "root" ]] && {
		PS1="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}] [${green}\w${white}]\n${white}╰── ${yellow}$ ${none}"
		PS2="${white}┌─[${blue}\t${white}] [${blue}\h@\u${white}]\n${white}╰── ${yellow}> ${none}"
		cd ~
		[[ $SHLVL -eq 1 ]] && {
			session=$(tmux ls 2>/dev/null | wc -l)
			active=$(tmux ls 2>/dev/null | grep -c '(attached)')
			[[ $session -gt $active ]] && tmux attach && return 0
			tmux 2>/dev/null
		}
	}
}
