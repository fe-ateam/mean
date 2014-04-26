class javascript {

    case $operatingsystem {
        ubuntu: {

            include apt

            apt::ppa { 'ppa:chris-lea/node.js':
                before => Class['nodejs']
            }
        }
    }

    class { 'nodejs':
        version => 'present'
    }

    package { 'bower':
        provider => npm,
        ensure => installed,
        require => Class['nodejs']
    }

    exec { "npm_install":
        command => "npm install --no-bin-links",
        cwd => $PROJ_DIR,
        path => $PATH,
        logoutput => on_failure,
        require => Class['nodejs']
    }

    exec { "bower_install":
        command => "bower install --allow-root",
        cwd => $PROJ_DIR,
        path => $PATH,
        logoutput => on_failure,
        require => Class['nodejs']
    }

    #package { 'grunt-cli':
    #    provider => npm,
    #    ensure => installed,
    #    require => Class['nodejs']
    #}
    #package { 'yo':
    #    provider => npm,
    #    ensure => installed,
    #    require => Class['nodejs']
    #}
    #package { 'generator-angular':
    #    provider => npm,
    #    ensure => installed,
    #    require => Package['yo']
    #}
    #exec { "npm_install":
    #    command => "npm install --no-bin-links",
    #    cwd => "/vagrant",
    #    path => "/usr/local/node/node-default/bin",
    #    require => Class['nodejs']
    #}
    #exec { "bower_install":
    #    command => "bower install",
    #    cwd => "/vagrant",
    #    path => "/usr/local/node/node-default/bin",
    #    require => Class['nodejs']
    #}
}
