module.exports = {
    unKnown: {
        code: "-9999",
        msg: "알수 없는 오류가 발생하였습니다."
    },
    memberNotFound: {
        code: "-1000",
        msg: "존재하지 않는 회원입니다."
    },
    emailSignInFailed: {
        code: "-1001",
        msg: "계정이 존재하지 않거나 이메일 또는 비밀번호가 정확하지 않습니다."
    },
    entryPointException: {
        code: "-1002",
        msg: "해당 리소스에 접근하기 위한 권한이 없습니다."
    },
    accessDenied: {
        code: "-1003",
        msg: "보유한 권한으로 접근할수 없는 리소스 입니다."
    },
    communicationError: {
        code: "-1004",
        msg: "통신 중 오류가 발생하였습니다."
    },
    existingUser: {
        code: "-10051",
        msg: "이미 가입한 회원입니다. 로그인을 해주십시오."
    },
    emailExistSignupFailed: {
        code: "-10052",
        msg: "입력하신 이메일은 이미 등록된 이메일 입니다."
    },
    notOwner: {
        code: "-1006",
        msg: "해당 자원의 소유자가 아닙니다."
    },
    resourceNotExist: {
        code: "-1007",
        msg: "요청한 자원이 존재 하지 않습니다."
    },

    tokenIssueFail: {
        code: "-1010",
        msg: "토큰 생성에 실패하였습니다."
    },
    tokenValidationFail: {
        code: "-1011",
        msg: "토큰 검증에 실패하였습니다."
    },
    tokenExpired: {
        code: "-1012",
        msg: "토큰이 만료되었습니다."
    },

}