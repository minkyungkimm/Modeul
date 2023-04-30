package com.modeul.web.repository;

import org.apache.ibatis.annotations.Mapper;

import com.modeul.web.entity.Member;
import com.modeul.web.entity.MemberImage;

@Mapper
public interface MemberRepository {


	int insert(Member member);
	
	Member getbyId(int id);

	String getbyUid(String uid);

	Member getPwdByUid(String uid);

	String getByEmail(String email);

	String getByNickname(String nickname);

	int update(Member member);

    int delete(Member member);

	void updateImg(MemberImage memberImage);
}
