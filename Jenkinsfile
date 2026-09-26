pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting source code from GitHub'
            }
        }

        stage('Build New Version') {
            steps {
                bat 'docker buildx build --load -t self-healing-cicd:v2 .'
            }
        }

        stage('Deploy New Version') {
            steps {
                bat 'docker rm -f self-healing-app || exit 0'
                bat 'docker run -d -p 3000:3000 --name self-healing-app self-healing-cicd:v2'
            }
        }

        stage('Health Check') {
            steps {
                script {
                    def result = bat(
                        script: 'curl -f http://localhost:3000/health',
                        returnStatus: true
                    )

                    if (result != 0) {
                        echo 'Health check FAILED. Starting rollback...'

                        bat 'docker rm -f self-healing-app || exit 0'
                        bat 'docker run -d -p 3000:3000 --name self-healing-app self-healing-cicd:stable-v1'

                        echo 'Rollback completed. Previous version restored.'
                        error('New deployment failed health check.')
                    } else {
                        echo 'Health check PASSED. New version is healthy.'
                    }
                }
            }
        }
    }
}