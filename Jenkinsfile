pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting source code from GitHub'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker buildx build --load -t self-healing-cicd:v1 .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker rm -f self-healing-app || exit 0'
                bat 'docker run -d -p 3000:3000 --name self-healing-app self-healing-cicd:v1'
            }
        }

        stage('Health Check') {
            steps {
                bat 'curl http://localhost:3000/health'
            }
        }
    }
}