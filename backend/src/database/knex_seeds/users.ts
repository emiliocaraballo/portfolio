import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("users").insert([
        { 
            sequence: 1,
            id: "c8432882-1615-4a45-b517-312c069d7fe8",
            name: "emilio fernando",
            last_name: "caraballo dueñas",
            identification: "1001972281",
            phone: "3017205180",
            gender: "M",
            role:2,
            profile:1,
            email:'emiliocaraballo9810@gmail.com',
            address_id:null,
            status:1,
            two_factor_secret:')A:GVRG&aOg<P?D<*#dnv?yMR(m3wk}7',
            photo_path:null,
            password:'$2b$10$AYPtKNuAQsEO8C0hKO0Bg.qZAkUxL2EcQDnvEz4r16eWxhsRGbZzC',
            two_factor_recovery_codes:'',
            created_at:knex.fn.now(),
            updated_at:knex.fn.now(),
            two_factor_tipo:'GA',
            two_factor_image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADUCAYAAADk3g0YAAAAAklEQVR4AewaftIAAAqeSURBVO3BQY7gRpIAQXei/v9l3z7GKQGCWS1pNszsD9ZaVzysta55WGtd87DWuuZhrXXNw1rrmoe11jUPa61rHtZa1zysta55WGtd87DWuuZhrXXNw1rrmoe11jUPa61rfvhI5W+qOFGZKiaVqWJSmSreUJkqJpWTikllqvhC5W+qOFGZKiaVv6nii4e11jUPa61rHtZa1/xwWcVNKicqU8VJxUnFicpUcaIyVZyovKEyVbxR8TepTBVvVNykctPDWuuah7XWNQ9rrWt++GUqb1TcpDJVTConFVPFScWkMqmcVJyoTBVvVEwqJxUnKicVv0nljYrf9LDWuuZhrXXNw1rrmh/+x1X8JpWp4qTiN6mcVJxUTConFV+oTBX/ZQ9rrWse1lrXPKy1rvnhP67iROWk4g2VqWJSmSpOVL5QmSreqJhUTireUPn/5GGtdc3DWuuah7XWNT/8soq/SWWqmFQmlZOKqeI3VbyhMqlMFW9UnKhMFScVv6ni3+RhrXXNw1rrmoe11jU/XKbyN6lMFZPKVDGpTBWTylQxqUwVk8pU8YbKVHFSMalMFZPKVDGpTBWTylQxqUwVk8pUcaLyb/aw1rrmYa11zcNa6xr7g/8wlaniC5Wp4iaVk4o3VE4qJpWTihOVLyomlaniv+xhrXXNw1rrmoe11jX2Bx+oTBU3qUwVk8pU8YXKTRUnKjdVfKEyVXyhclIxqZxUnKi8UXHTw1rrmoe11jUPa61rfvhlKm9UTBWTylRxojJVvFExqUwVJypTxUnFpPKGyknFv4nKGyonFScqv+lhrXXNw1rrmoe11jU/fFRxUvGFyhsqU8WJyhsVk8obKlPFpHJSMalMFZPKpDJV3KTymyreUPmbHtZa1zysta55WGtdY39wkcpUMalMFZPKVDGpnFS8oTJVTCpTxYnKScUXKicVX6icVEwqU8WJyhcVk8pNFV88rLWueVhrXfOw1rrmh8sqJpWpYlKZKiaVqeINlS8qJpWbVE4q3lA5qfibVE4qJpUTlTcq/qaHtdY1D2utax7WWtf88JHKScWkMlWcVEwqU8VvUjmpmFSmipOKSWVSmSpuUpkqTlSmikllqphUJpWTihOVN1ROKr54WGtd87DWuuZhrXXND5dVnFRMKv8mKm+ovKHyhcpUcaIyVbyhMlWcVEwqJxUnKl+oTBWTyk0Pa61rHtZa1zysta6xP/hFKm9UvKFyUjGpnFRMKlPFpDJVvKFyUjGpTBVvqEwVk8pUMalMFZPKScWk8kbFGypTxW96WGtd87DWuuZhrXWN/cE/SOWLiknljYpJ5Y2KSeWk4kRlqnhD5aTiRGWqmFSmikllqnhDZaq4SeWk4ouHtdY1D2utax7WWtfYH3ygMlVMKlPFFyonFZPKGxWTylTxhcpJxW9SmSomlZOKm1ROKiaVNypOVKaKLx7WWtc8rLWueVhrXfPDRxVvqEwVk8pJxaRyUjGpTBVvqNxUMalMFScqN1VMKicqU8WJylQxqdykMlX8poe11jUPa61rHtZa1/zwkcpUcVJxUvGFyhcq/6SKv0nlpOKk4kRlqjipmFSmiknlpGJS+U0Pa61rHtZa1zysta6xP/hAZap4Q+WmijdU3qiYVP5NKiaVk4oTlZOKSeW/rOKLh7XWNQ9rrWse1lrX/PDLVN6oeENlUnmjYlKZKiaVNypOVKaKN1QmlaniROULlZOKE5Wp4g2VNyp+08Na65qHtdY1D2uta374yyomlROVqeKkYlKZKm6qOFGZKt5QmSpOKk5UTipOVKaKSWVS+UJlqjipmFT+poe11jUPa61rHtZa1/zwL1fxm1SmipOKSeUNlTcqvlB5Q+UNld9U8YbKP+lhrXXNw1rrmoe11jU/fFRxUjGpnKj8TRWTylQxqUwVk8pJxaQyqfymikllqphUTiq+UJlUvqg4UTmp+OJhrXXNw1rrmoe11jU/fKQyVbxRMalMFW+onKj8k1SmiknlpGJSmVSmikllqjipOFE5qTipmFTeqJhUTiomlZse1lrXPKy1rnlYa11jf/CByknFFypTxaQyVZyoTBWTyhcVk8pU8YbKVPGGyknFicpU8YbKVDGpTBWTylRxovJGxU0Pa61rHtZa1zysta754S9TmSomlaliUpkqTlSmiknlN1VMKl+ofFExqUwVv0llqphUflPFpDJVfPGw1rrmYa11zcNa65ofPqo4UZkqJpWpYlJ5Q+VE5aTiRGWqmFSmiqniN6lMFZPKVDGpTBWTylQxqZxUTConFScqU8U/6WGtdc3DWuuah7XWNT98pHJS8YbKVDGpnFRMKlPFpPKFylQxqUwVk8pUMam8UXFScVIxqUwVk8pJxaRyUnGiMlW8ofKbHtZa1zysta55WGtd88NHFZPKicpUcaIyVXyhcqJyUjGpnFS8ofKbVE4qTlT+JpWpYlKZKiaVqeI3Pay1rnlYa13zsNa65oePVE5UpopJZaqYKiaVNyomlZOKE5UTlb+p4t9M5aTii4ovVKaKLx7WWtc8rLWueVhrXfPDRxWTyonKicobFV9UnKhMFW+onFRMKicVN1VMKlPFpDJV/JuoTBV/08Na65qHtdY1D2uta+wPPlA5qThRmSreUDmpmFSmijdUbqp4Q2WqOFH5TRUnKicVk8oXFZPKVPGbHtZa1zysta55WGtdY3/wD1KZKiaVqeJE5aaKN1SmihOVk4o3VKaKE5Wp4kTlpopJZaqYVKaKSWWqmFSmipse1lrXPKy1rnlYa11jf3CRyhcVJypfVHyhMlVMKjdVTCpTxRsqb1RMKicVk8obFZPKGxWTyhsVXzysta55WGtd87DWusb+4AOVqeJE5aRiUpkqJpWTiknlpGJSOak4UfmbKiaVNypOVKaKN1T+zSq+eFhrXfOw1rrmYa11zQ8fVbxR8UbFTRWTyt9UMalMFW+onFRMKlPFicpUMamcVEwVk8pU8YbKVDGp/E0Pa61rHtZa1zysta754SOVv6liqjhReUPlpGJSmSqmiknlDZWp4kRlqjhROal4o2JSmSreUJkqvqj4TQ9rrWse1lrXPKy1rvnhsoqbVN5QmSpOVKaKSWVSmSp+U8VNFScqk8pUMVVMKjdVvKHyT3pYa13zsNa65mGtdc0Pv0zljYovKiaVk4pJ5aTiRGWqmComlUnli4pJZao4qZhUTlROKiaVE5UvKv5JD2utax7WWtc8rLWu+eF/jMpJxaTyhcpUMamcVHyhMqlMFZPKVPGGylQxqZxUfKFyojJV/E0Pa61rHtZa1zysta754X9cxRsVk8qkcqIyVUwqk8pUMalMFVPFpHJS8UbFpDKpvKFyUnFSMalMFZPKVDGpTBVfPKy1rnlYa13zsNa65odfVvE3VbxR8UbFpDJVTCpfVEwqU8UXKm9UTCpTxUnFpDKpTBWTyonKGxU3Pay1rnlYa13zsNa6xv7gA5W/qWJSmSomlaliUjmpmFROKr5QmSpOVKaKE5Wp4kTlpOINlS8qJpWp4kRlqrjpYa11zcNa65qHtdY19gdrrSse1lrXPKy1rnlYa13zsNa65mGtdc3DWuuah7XWNQ9rrWse1lrXPKy1rnlYa13zsNa65mGtdc3DWuuah7XWNf8H5tm85u3Dag4AAAAASUVORK5CYII=',
        }
    ]);
};