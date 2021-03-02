export function change_sort(field, sort_field, sort_direction) {
    switch (field) {
        case "min":
            sort_field = "price";
            sort_direction = "asc";
            break;
        case "max":
            sort_field = "price";
            sort_direction = "desc";
            break;
    }
}