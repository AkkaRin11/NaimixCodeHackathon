package com.example.NaimixCodeHackathon.dto;

import com.example.NaimixCodeHackathon.domain.User;
import lombok.Data;

@Data
public class UserDTO {
    private final String firstName;
    private final String lastName;
    private final String middleName;

    public static UserDTO toDTO(User user){
        return new UserDTO(
                user.getFirstName(),
                user.getLastName(),
                user.getMiddleName()
        );
    }

    public static User toDomainObject(UserDTO userDTO){
        return User.builder()
            .firstName(userDTO.firstName)
            .lastName(userDTO.lastName)
            .middleName(userDTO.middleName)
            .build();
    }
}
