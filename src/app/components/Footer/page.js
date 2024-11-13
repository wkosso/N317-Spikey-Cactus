import footerStyles from './footer.module.css'
export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerLinks}>
                <p className={footerStyles.footerP}> &copy;Wolf Wild Life  2024</p>
                <a href="#" className={footerStyles.footerLink}>Instagram</a>
                <a href="#" className={footerStyles.footerLink}>Facebook</a>
                <a href="#" className={footerStyles.footerLink}>Tiktok</a>
            </div>
        </footer>
    );
}
