pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting source code'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking application health'
            }
        }
    }
}