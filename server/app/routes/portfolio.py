from flask import Blueprint, request, jsonify, current_app
from ..services.mail_service import send_email

portfolio_bp = Blueprint("portfolio", __name__)

@portfolio_bp.route("/log_view", methods=["GET", "OPTIONS"])
def log_view():
    source = request.args.get("source", "Unknown")
    subject = "Portfolio View Logged"
    body = f"Hey, somebody from {source} viewed your portfolio!"
    sent = send_email(subject, body)

    if sent:
        return jsonify({"status": "sent", "source": source}), 200
    return jsonify({"status": "failed"}), 500

@portfolio_bp.route("/contact_message", methods=["POST", "OPTIONS"])
def contact_message():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    data = request.get_json()

    name = data.get("name", "Unknown")
    email = data.get("email", "Unknown")
    message = data.get("message", "")

    subject = "New Portfolio Contact Message"
    body = f"""
    New message from your portfolio:

    Name: {name}
    Email: {email}

    Message:
    {message}
    """

    sent = send_email(subject, body)

    if sent:
        return jsonify({"status": "sent"}), 200
    return jsonify({"status": "failed"}), 500
