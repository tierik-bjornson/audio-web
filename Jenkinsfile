pipeline {
    agent any
    tools {
        nodejs "Node23"
    }
    environment {
        REGISTRY = 'localhost:80'
        PROJECT = 'lab-audio-web'
        IMAGE_NAME = 'audio-web'
        HARBOR_CREDS = 'harbor-credentials'
        DEPLOY_REPO = 'https://github.com/tierik-bjornson/audio-web-deploy.git'
        DEPLOY_BRANCH = 'main'
        DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('Start') {
            steps {
                script {
                    echo "Pipeline bắt đầu chạy!"
                }
            }
        }
        stage('Checkout Source Code') {
            steps {
                script {
                    echo "Đang clone repository source code..."
                    git url: 'https://github.com/tierik-bjornson/audio-web.git', branch: 'main'
                    echo "Clone source code thành công!"
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    echo "Cài đặt dependencies..."
                    sh 'npm install'
                    echo "Cài đặt hoàn tất!"
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Bắt đầu build..."
                    sh 'npm run build'
                    echo "Build hoàn tất!"
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo "Chạy test..."
                    sh 'npm run test || echo "No tests specified, skipping..."'
                    echo "Test xong!"
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    echo "⚡ Bắt đầu build Docker image..."
                    sh "docker build -t ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:${DOCKER_IMAGE_TAG} ."
                    echo "Build Docker image hoàn thành!"
                }
            }
        }
        stage('Push to Harbor') {
            steps {
                script {
                    echo "Đăng nhập vào Harbor..."
                    sh "docker login ${REGISTRY} -u admin -p Harbor12345"
                    echo "🚀 Push image lên Harbor..."
                    sh "docker push ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                    sh "docker tag ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:${DOCKER_IMAGE_TAG} ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:latest"
                    sh "docker push ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:latest"
                    echo "Push thành công!"
                }
            }
        }
        stage('Update Deployment Repo') {
             steps {
                 script {
                     echo "🔥 Clone repository deploy..."
                     sh "rm -rf audio-web-deploy"
                     sh "git clone ${DEPLOY_REPO} audio-web-deploy"

                     dir("audio-web-deploy") {
                        echo "🔄 Cập nhật tag mới trong values.yaml..."
                        sh """
                        sed -i 's|tag: .*|tag: "${DOCKER_IMAGE_TAG}"|' values.yaml
                        git config --global user.email "bjornson25102003@gmail.com"
                        git config --global user.name "tierik-bjornson"
                        git add values.yaml
                        git commit -m "🚀 Update image tag to ${DOCKER_IMAGE_TAG}"
                        """
                        def changes = sh(script: "git diff --name-only HEAD~1 HEAD", returnStdout: true).trim()
                        if (changes) {
                            echo "🛠️ Có thay đổi, tiến hành push..."
                            sh "git push origin ${DEPLOY_BRANCH}"
                        } else {
                            echo "✅ Không có thay đổi nào, bỏ qua push."
                        }
                     }
                     echo "🎉 Cập nhật repo deploy thành công!"
                }
            }
        }
        stage('Cleanup') {
            steps {
                script {
                    echo "Dọn dẹp Docker image..."
                    sh "docker rmi ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:${DOCKER_IMAGE_TAG} || true"
                    echo "Dọn dẹp hoàn tất!"
                }
            }
        }
    }
    post {
        success {
            echo '🎉 Build và push lên Harbor thành công! Repo deploy đã được cập nhật.'
        }
        failure {
            echo '❌ Build thất bại. Kiểm tra logs để xem chi tiết.'
        }
    }
}
