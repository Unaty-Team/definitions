const member = {
    id: {
        type: "uppercase-8-char-id"
    },
    about: {
        bio: {
            type: "string",
            max: "240"
        },
        first_name: {
            type: "string",
            max: "120"
        },
        last_name: {
            type: "string",
            max: "120"
        },
        middle_name: {
            type: "string",
            max: "120"
        },
        title: {
            type: "string",
            max: "120"
        },
        location: {
            type: "string",
            max: "120"
        },
    },
    address: {
        line_one: {
            type: "string"
        },
        line_two: {
            type: "string"
        },
        zip_code: {
            type: "string"
        },
        city: {
            type: "string"
        },
        state: {
            type: "string"
        },
        country: {
            type: "country"
        }
    },
    account_email: {
      type: "email"
    },
    age: {
        type: "number",
    },
    archived: {
        type: "boolean"
    },
    birthday: {
        type: "object-date"
    },
    career: {
        type: "map"
    },
    community_uid: {
        type: "uppercase-8-char-id"
    },
    continent: {
        type: "string"
    },
    cover_photo: {
        type: "image-url"
    },
    cover_photo_color: {
        type: "color"
    },
    created_at: {
        type: "timestamp"
    },
    created_by: {
        type: "uppercase-8-char-id"
    },
    custom_fields: {
        type: "map"
    },
    data_integrity: {
        type: "string"
    },
    education: {
        type: "map"
    },
    group_ids: {
        type: "array"
    },
    groups: {
        type: "map"
    },
    handle: {
        type: "string"
    },
    last_sign_in: {
        type: "timestamp"
    },
    name: {
        type: "string"
    },
    member_type: {
        type: "uppercase-8-char-id"
    },
    preferences: {
        type: "string"
    },
    profile_completeness: {
        type: "float"
    },
    profile_picture: {
        type: "image-url"
    },
    profile_picture_color: {
        type: "color"
    },
    profile_quality: {
        type: "float"
    },
    profile_updated_at: {
        type: "timestamp"
    },
    secondary_emails: {
        type: "array"
    },
    short_birthday: {
        type: "shortdate"
    },
    social: {
        type: "map"
    },
    stats: {
        type: "map"
    },
    suspended: {
        type: "boolean"
    },
    updated_at: {
        type: "timestamp"
    },
    updated_by: {
        type: "uppercase-8-char-id"
    },
    updated_profile_this_week: {
        type: "boolean"
    },
    user_uid: {
        type: "user-uid"
    }
};