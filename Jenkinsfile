node{
    stage("checkout"){
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'githubVentoux', url: 'https://github.com/Gayaferhat/Tourmalet.git']]])
    }
}