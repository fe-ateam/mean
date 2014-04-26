# stage {"pre": before => Stage["main"]} class {'apt': stage => 'pre'}

# Commands to run before all others in puppet.
class init {
    group { 'puppet':
        ensure => 'present',
    }

    case $operatingsystem {
        ubuntu: {

            exec { 'update_apt':
                command => "sudo apt-get update"
            }

            package { 'install_dev_libs':
                name => [
                    'software-properties-common',
                    'python-software-properties',
                    'g++',
                    'make',
                    'curl',
                    'build-essential',
                    'git-core'
                ],
                ensure => present,
                require => Exec['update_apt']
            }

            #apt::ppa { 'ppa:chris-lea/node.js':
            #    require => Package['install_dev_libs']
            #}
        }
    }
}
