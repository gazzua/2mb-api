import swaggerJSDoc from 'swagger-jsdoc';

const swaggerConfig =  {
  swaggerDefinition: {
    // 정보
    info: {
      title: '2mb api',
      version: '0.0.1',
      description: '2mb api swagger'
    },
    // 주소
    host: "localhost:4001",
    // 기본 root path
    basePath: "/",
    contact: {
      email: "dev.suub@gmail.com"
    },
    // 각 api에서 설명을 기록할 때 사용할 constant들을 미리 등록해놓는것
    components: {
      res: {
        BadRequest: {
          description: '잘못된 요청.',
          schema: {
            $ref: '#/components/errorResult/Error'
          }
        },
        Forbidden: {
          description: '권한이 없슴.',
          schema: {
            $ref: '#/components/errorResult/Error'
          }
        },
        NotFound: {
          description: '없는 리소스 요청.',
          schema: {
            $ref: '#/components/errorResult/Error'
          }
        }
      },
      errorResult: {
        Error: {
          type: 'object',
          properties: {
            errMsg: {
              type: 'string',
              description: '에러 메시지 전달.'
            }
          }
        }
      }
    },
    schemes: ["http", "https"], // 가능한 통신 방식
  },
  apis: ['./src/api/*.ts'] // api 파일 위치들 
};

const swaggerSpec = swaggerJSDoc(swaggerConfig);

export default swaggerSpec;