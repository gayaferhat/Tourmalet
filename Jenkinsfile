node{
    agent {
        docker { image 'node:latest' }
      }
    stage("checkout"){
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'githubVentoux', url: 'https://github.com/Gayaferhat/Tourmalet.git']]])
    }
     stage("build backend"){
            sh "chmod 777 -R ./ventoux/mvnw"
            sh "cd ventoux && ./mvnw clean install -DskipTests"
        }
     stage("build front end"){
            steps {
                            sh '''
                            cd front
                            npm install
                            ng test --browsers ChromeHeadlessCustom --watch false
                            ng build --prod
                            '''
                        }
     }
}