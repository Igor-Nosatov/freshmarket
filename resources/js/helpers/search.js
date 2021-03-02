export default function() {
    if (
        this.this.meta_data.current_page + 1 >
        this.this.meta_data.last_page
    )
        this.this.meta_data.current_page = this.meta_data.last_page - 1;
}