pipeline {
    agent any

    environment {
        APP_NAME = "node-app"
        DEPLOY_PATH = "/var/www/node-app"
    }

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/anishsharma2277/node-jenkins-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh """
                mkdir -p ${DEPLOY_PATH}
                rsync -az --delete ./ ${DEPLOY_PATH}/
                """
            }
        }

        stage('Process Management') {
            steps {
                sh """
                if pm2 describe ${APP_NAME} > /dev/null; then
                    pm2 reload ecosystem.config.js
                else
                    pm2 start ecosystem.config.js
                fi
                """
            }
        }

        stage('Health Check') {
            steps {
                sh """
                sleep 5
                curl -f http://localhost:3000/health
                """
            }
        }
    }

    post {
        success {
            echo "Deployment completed successfully"
        }
        failure {
            echo "Deployment failed"
        }
        always {
            cleanWs()
        }
    }
}
